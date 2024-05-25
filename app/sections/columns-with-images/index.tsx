import type { HydrogenComponentSchema } from "@weaverse/hydrogen";
import { forwardRef } from "react";
import type { SectionProps } from "~/components/Section";
import { Section, sectionInspector } from "~/components/Section";

type ColumnsWithImagesProps = SectionProps;

let ColumnsWithImages = forwardRef<HTMLElement, ColumnsWithImagesProps>(
  (props, ref) => {
    let { children, ...rest } = props;
    return (
      <Section ref={ref} {...rest}>
        {children}
      </Section>
    );
  },
);

export default ColumnsWithImages;

export let schema: HydrogenComponentSchema = {
  type: "columns-with-images",
  title: "Columns with images",
  toolbar: ["general-settings", ["duplicate", "delete"]],
  inspector: sectionInspector,
  childTypes: [
    "columns-with-images--items",
    "subheading",
    "heading",
    "description",
  ],
  presets: {
    gap: 48,
    children: [
      {
        type: "heading",
        content: "Columns with images",
      },
      {
        type: "columns-with-images--items",
      },
    ],
  },
};
