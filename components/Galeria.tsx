"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { GaleriaCategoria, GaleriaItem } from "@/data/galeria";
import { GALERIA_CATEGORIAS, GALERIA_ITEMS } from "@/data/galeria";

type Filtro = "Todos" | GaleriaCategoria;

export default function Galeria({
  items = GALERIA_ITEMS,
}: {
  items?: GaleriaItem[];
}) {
  const [filtro, setFiltro] = useState<Filtro>("Todos");
  const [isFading, setIsFading] = useState(false);
  const fadeTimeoutRef = useRef<number | null>(null);
  const FADE_MS = 150;
  const PRIORITY_COUNT = 6;

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  const filtros = useMemo<Filtro[]>(
    () => ["Todos", ...GALERIA_CATEGORIAS],
    []
  );

  const filtrados = useMemo(() => {
    if (filtro === "Todos") return items;
    return items.filter((it) => it.categorias.includes(filtro));
  }, [filtro, items]);

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="sticky top-16 z-20 -mx-4 border-b border-black/5 bg-white/80 px-4 py-3 backdrop-blur">
          <div className="flex flex-wrap gap-2">
            {filtros.map((f) => {
              const activo = f === filtro;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => {
                    if (f === filtro) return;
                    setIsFading(true);
                    if (fadeTimeoutRef.current)
                      window.clearTimeout(fadeTimeoutRef.current);
                    fadeTimeoutRef.current = window.setTimeout(() => {
                      setFiltro(f);
                      requestAnimationFrame(() => setIsFading(false));
                    }, FADE_MS);
                  }}
                  className={[
                    "rounded-full border px-3 py-1 text-sm font-medium transition",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2",
                    activo
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white text-black hover:border-black/30 hover:bg-black/5",
                  ].join(" ")}
                  aria-pressed={activo}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={[
            "mt-6 grid grid-cols-2 gap-2 transition-opacity duration-150 ease-out lg:grid-cols-3",
            isFading ? "opacity-0" : "opacity-100",
          ].join(" ")}
        >
          {filtrados.map((it, idx) => (
            <figure key={it.id} className="min-w-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-black/5">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={idx < PRIORITY_COUNT}
                  {...(idx >= PRIORITY_COUNT ? { loading: "lazy" as const } : {})}
                />
              </div>
              <figcaption className="mt-2 text-pretty text-sm text-black/80 whitespace-normal break-words">
                {it.descripcion}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

