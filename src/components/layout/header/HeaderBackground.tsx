export const HeaderBackground = () => {
  return (
    <>
      {/* Glassmorphism background */}
      <div className="bg-background/60 absolute inset-0 -z-10 backdrop-blur-md" />
      {/* Bottom border */}
      <div className="via-border absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent to-transparent" />
    </>
  );
};
export default HeaderBackground;
