export const basicBoxStyles = {
  position: "relative",

  background:
    "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/static/bg-netflix-clone.jpeg) center/cover no-repeat",
  backgroundBlendMode: "normal, darken",
  mixBlendMode: "darken",
};

export const ContainerQuery = {
  maxW: ["container.sm", "container.md", "container.lg", "container.xl"],
  gap: { base: 14, md: 10 },
  bgColor: { base: "blackAlpha.800", md: "transparent" },
};
export const VStackQuery = {
  w: ["full", "sm", "md", "lg", "xl"],
  bgColor: { base: "transparent", md: "blackAlpha.800" },
  spacing: { base: 6, md: 8 },
  px: { base: 6, md: 10 },
};
export const InputQuery = {
  size: { base: "md", md: "lg" },
};
export const ButtonQuery = {
  size: { base: "md", md: "lg" },
};
