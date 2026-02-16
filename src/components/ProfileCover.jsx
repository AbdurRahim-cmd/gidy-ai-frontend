export default function ProfileCover() {
  return (
    <div className="relative h-56 rounded-3xl overflow-hidden">

      {/* Gradient Base */}
      <div className="absolute inset-0 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2)_2px,transparent_2px)]
        bg-[length:40px_40px] opacity-30" />

      {/* Soft blur glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 
        bg-white/20 rounded-full blur-3xl" />
    </div>
  );
}
