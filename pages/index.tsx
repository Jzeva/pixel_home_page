import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Landing() {
  const router = useRouter();
  const [debug, setDebug] = useState(false);
  const go = () => router.push("/home");

  // 按 D 键切换热点可视化
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "d") setDebug((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="page">
      <div className="gif-wrapper">
        <Image
          src="/pixel-girl.gif"
          alt="Pixel girl coding"
          fill
          priority
          unoptimized
          style={{ objectFit: "contain" }}
        />

        {/* 命中区域：已重新定位到“笔记本” */}
        <button
          aria-label="Enter site"
          className={`hotspot ${debug ? "show" : ""}`}
          onClick={go}
          title="Click the laptop to enter"
        />
      </div>
      <p className="hint">
        Click the laptop to enter{" "}
        {debug ? "(DEBUG ON: press D to hide)" : "(press D to debug)"}{" "}
      </p>

      <style jsx>{`
        .page {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #0a0a0a;
          color: #d1d5db;
          user-select: none;
        }
        .gif-wrapper {
          position: relative;
          width: min(92vw, 900px);
          aspect-ratio: 16 / 9; /* 保证与 GIF 比例一致，百分比可自适应 */
        }
        /* ======= 热点位置（已重定位） =======
           这些百分比基于你的截图微调，覆盖笔记本（含屏幕与键盘）
           如需再调，主要改 left/top/width/height 即可
        */
        .hotspot {
          position: absolute;
          left: 52%;
          top: 60.5%;
          width: 15%;
          height: 20%;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        /* 调试态：显示可视化边框 */
        .hotspot.show {
          outline: 2px dashed rgba(255, 255, 255, 0.35);
          outline-offset: 0;
          background: rgba(255, 255, 255, 0.08);
        }

        .hint {
          margin-top: 12px;
          font-size: 0.9rem;
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
}
