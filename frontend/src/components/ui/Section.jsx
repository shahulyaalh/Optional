import { cn } from "../../lib/utils"

const Section = ({
  children,
  className,
  containerClassName,
  id,
  background = "bg-white dark:bg-gray-900",
  as: Component = "section",
}) => {
  return (
    <Component id={id} className={cn("py-16 md:py-24 theme-transition", background, className)}>
      <div className={cn("container-custom mx-auto", containerClassName)}>{children}</div>
    </Component>
  )
}

export default Section
