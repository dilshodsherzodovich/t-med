import { useState, useEffect, useRef, useCallback } from "react";
import "./CircularGallery.scss";

// ── GalleryImage ─────────────────────────��──────────────────��─────────────────

function GalleryImage({ url, open, inPlace, id, onInPlace, total }) {
  const [firstLoad, setLoaded] = useState(true);
  const clip = useRef(null);

  const gap = 10;
  const circleRadius = 7;
  const defaults = { transformOrigin: "center center" };
  const duration = 0.4;
  const width = 400;
  const height = 400;
  const bigSize = circleRadius * 700;

  const getPosSmall = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height - 30,
    r: circleRadius,
  });
  const getPosSmallAbove = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height / 2,
    r: circleRadius * 2,
  });
  const getPosCenter = () => ({ cx: width / 2, cy: height / 2, r: circleRadius * 7 });
  const getPosEnd = () => ({ cx: width / 2 - bigSize, cy: height / 2, r: bigSize });
  const getPosStart = () => ({ cx: width / 2 + bigSize, cy: height / 2, r: bigSize });

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;

    setLoaded(false);
    if (!clip.current) return;

    const flipDuration = firstLoad ? 0 : duration;
    const upDuration = firstLoad ? 0 : 0.2;
    const bounceDuration = firstLoad ? 0.01 : 1;
    const delay = firstLoad ? 0 : flipDuration + upDuration;

    if (open) {
      gsap.timeline()
        .set(clip.current, { ...defaults, ...getPosSmall() })
        .to(clip.current, { ...defaults, ...getPosCenter(), duration: upDuration, ease: "power3.inOut" })
        .to(clip.current, { ...defaults, ...getPosEnd(), duration: flipDuration, ease: "power4.in", onComplete: () => onInPlace(id) });
    } else {
      gsap.timeline({ overwrite: true })
        .set(clip.current, { ...defaults, ...getPosStart() })
        .to(clip.current, { ...defaults, ...getPosCenter(), delay, duration: flipDuration, ease: "power4.out" })
        .to(clip.current, {
          ...defaults,
          motionPath: { path: [getPosSmallAbove(), getPosSmall()], curviness: 1 },
          duration: bounceDuration,
          ease: "bounce.out",
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      style={{ height: "100%", width: "100%" }}
    >
      <defs>
        <clipPath id={`cg_${id}_circle`}>
          <circle cx="0" cy="0" r={circleRadius} ref={clip} />
        </clipPath>
        <clipPath id={`cg_${id}_square`}>
          <rect width={width} height={height} />
        </clipPath>
      </defs>
      <g clipPath={`url(#cg_${id}${inPlace ? "_square" : "_circle"})`}>
        <image width={width} height={height} href={url} style={{ pointerEvents: "none" }} />
      </g>
    </svg>
  );
}

// ── Tabs ───────────────────────────────────────────────────────��──────────────

function Tabs({ images, onSelect }) {
  const gap = 10;
  const circleRadius = 7;
  const width = 400;
  const height = 400;

  const getPosX = (i) =>
    width / 2 - (images.length * (circleRadius * 2 + gap) - gap) / 2 + i * (circleRadius * 2 + gap);
  const getPosY = () => height - 30;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      style={{ height: "100%", width: "100%" }}
    >
      {images.map((img, i) => (
        <g key={img.url + i} style={{ pointerEvents: "auto" }}>
          <defs>
            <clipPath id={`cg_tab_${i}_clip`}>
              <circle cx={getPosX(i)} cy={getPosY()} r={circleRadius} />
            </clipPath>
          </defs>
          <image
            x={getPosX(i) - circleRadius}
            y={getPosY() - circleRadius}
            width={circleRadius * 2}
            height={circleRadius * 2}
            href={img.url}
            clipPath={`url(#cg_tab_${i}_clip)`}
            style={{ pointerEvents: "none" }}
            preserveAspectRatio="xMidYMid slice"
          />
          <circle
            onClick={() => onSelect(i)}
            className="cg-tab-circle"
            strokeWidth="2"
            cx={getPosX(i)}
            cy={getPosY()}
            r={circleRadius + 2}
          />
        </g>
      ))}
    </svg>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function CircularImageGallery({ images = [] }) {
  const [opened, setOpened] = useState(0);
  const [inPlace, setInPlace] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [gsapReady, setGsapReady] = useState(false);
  const autoplayTimer = useRef(null);

  // Normalize: accept string[] or {url,title}[]
  const imgs = images.map((img, i) =>
    typeof img === "string" ? { url: img, title: `Image ${i + 1}` } : img
  );

  useEffect(() => {
    if (window.gsap && window.MotionPathPlugin) {
      window.gsap.registerPlugin(window.MotionPathPlugin);
      setGsapReady(true);
      return;
    }
    const s1 = document.createElement("script");
    s1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    s1.onload = () => {
      const s2 = document.createElement("script");
      s2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/MotionPathPlugin.min.js";
      s2.onload = () => {
        if (window.gsap && window.MotionPathPlugin) {
          window.gsap.registerPlugin(window.MotionPathPlugin);
          setGsapReady(true);
        }
      };
      document.body.appendChild(s2);
    };
    document.body.appendChild(s1);
  }, []);

  const onClick = (i) => { if (!disabled) setOpened(i); };
  const onInPlace = (i) => setInPlace(i);

  const next = useCallback(() => {
    setOpened((cur) => (cur + 1 >= imgs.length ? 0 : cur + 1));
  }, [imgs.length]);

  const prev = useCallback(() => {
    setOpened((cur) => (cur - 1 < 0 ? imgs.length - 1 : cur - 1));
  }, [imgs.length]);

  useEffect(() => setDisabled(true), [opened]);
  useEffect(() => setDisabled(false), [inPlace]);

  useEffect(() => {
    if (!gsapReady || !imgs.length) return;
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(next, 4500);
    return () => clearInterval(autoplayTimer.current);
  }, [opened, gsapReady, next, imgs.length]);

  if (!imgs.length) return null;

  return (
    <div className="cg-wrapper">
      <button className="cg-btn cg-btn--prev" onClick={prev} disabled={disabled} aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="cg-frame">
        {gsapReady && imgs.map((img, i) => (
          <div
            key={img.url + i}
            style={{
              position: "absolute", left: 0, top: 0,
              height: "100%", width: "100%",
              zIndex: inPlace === i ? i : imgs.length + 1,
            }}
          >
            <GalleryImage
              total={imgs.length}
              id={i}
              url={img.url}
              open={opened === i}
              inPlace={inPlace === i}
              onInPlace={onInPlace}
            />
          </div>
        ))}
        <div style={{ position: "absolute", inset: 0, zIndex: 100, pointerEvents: "none" }}>
          <Tabs images={imgs} onSelect={onClick} />
        </div>
      </div>

      <button className="cg-btn cg-btn--next" onClick={next} disabled={disabled} aria-label="Next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
