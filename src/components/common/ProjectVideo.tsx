import { Dialog } from "@base-ui/react/dialog";
import { Play, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Project } from "@/data/projects";

/** Preview-ul din card; la click deschide video-ul mare (sau un placeholder) într-un popup. */
export default function ProjectVideo({
  project,
}: {
  project: Pick<Project, "name" | "video" | "poster">;
}) {
  const { t } = useTranslation();
  const { name, video, poster } = project;

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="group/media relative aspect-video overflow-hidden rounded-xl bg-[#1A1622] ring-1 ring-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
        aria-label={t("projects.previewLabel", { name })}
      >
        {poster ? (
          <img
            src={poster}
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-70 transition-opacity duration-300 group-hover/media:opacity-100"
          />
        ) : video ? (
          // fără poster folosim primul cadru din video
          <video
            src={`${video}#t=0.1`}
            preload="metadata"
            muted
            playsInline
            tabIndex={-1}
            className="pointer-events-none absolute inset-0 size-full object-cover opacity-70 transition-opacity duration-300 group-hover/media:opacity-100"
          />
        ) : null}

        <span className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover/media:scale-110 group-hover/media:bg-yellow-400">
          <Play
            aria-hidden
            size={22}
            className="translate-x-0.5 text-white transition-colors group-hover/media:text-[#1A1622]"
            fill="currentColor"
          />
        </span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />

        {/* popup-ul se demontează la închidere, deci video-ul se oprește singur */}
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[min(64rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#2F293A] p-3 text-white shadow-[0_0_80px_-20px_rgb(250_204_21/0.5)] ring-1 ring-white/10 transition-all duration-200 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 md:p-4">
          <div className="mb-3 flex items-center justify-between gap-4 px-1">
            <Dialog.Title className="truncate text-base font-semibold tracking-tight md:text-lg">
              {name}
            </Dialog.Title>
            <Dialog.Close
              aria-label={t("projects.closeVideo")}
              className="grid size-9 shrink-0 place-items-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-yellow-400 hover:text-[#1A1622] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
            >
              <X aria-hidden size={18} />
            </Dialog.Close>
          </div>

          {video ? (
            <video
              src={video}
              poster={poster}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full rounded-xl bg-black"
            >
              {t("projects.videoUnsupported")}
            </video>
          ) : (
            // placeholder până există o înregistrare a proiectului
            <div className="grid aspect-video w-full place-items-center rounded-xl bg-[#1A1622] ring-1 ring-white/5">
              <div className="flex flex-col items-center gap-3 text-white/50">
                <span className="grid size-16 place-items-center rounded-full bg-white/5">
                  <Play aria-hidden size={26} className="translate-x-0.5" fill="currentColor" />
                </span>
                <p className="text-sm">{t("projects.videoComingSoon")}</p>
              </div>
            </div>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
