export const HeaderBackground = () => {
  return (
    <>
      {/* Glassmorphism background */}
      <div className="absolute inset-0 -z-10 bg-background/60 backdrop-blur-md" />
      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-border to-transparent" />
    </>
  );
};
export default HeaderBackground;
