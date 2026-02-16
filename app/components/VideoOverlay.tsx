"use client";

export default function VideoOverlay() {
  return (
    <div className="profile-vid" aria-hidden="true">
      <video
        src="/Vid.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="mix-blend-screen w-full h-auto max-h-37.5 object-contain overlay-video text-white"
      />
    </div>
  );
}
