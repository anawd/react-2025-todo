import { cva, type VariantProps } from "class-variance-authority";

export const IconVariants = cva("", {
  variants: {
    animate: {
      true: "animate-spin",
      false: "",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof IconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={IconVariants({ animate, className })} {...props} />
  );
}