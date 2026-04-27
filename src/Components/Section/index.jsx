import Spacing from "../Spacing";

export default function Section({
  topSpaceLg = "",
  topSpaceMd = "_",
  bottomSpaceLg = "_",
  bottomSpaceMd = "_",
  backgroundImage = "",
  backgroundSize = "cover",
  backgroundPosition = "top center",
  backgroundRepeat = "no-repeat",
  className,
  id = "",
  children,
  ...props
}) {
  return (
    <section
      className={`${className ? className : ""} section`}
      id={id}
      {...props}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition,
            }
          : {}
      }
    >
      <Spacing lg={topSpaceLg} md={topSpaceMd} />
      {children}
      <Spacing lg={bottomSpaceLg} md={bottomSpaceMd} />
    </section>
  );
}
