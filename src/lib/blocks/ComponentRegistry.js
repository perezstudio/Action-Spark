import { DivBlock, FooterBlock, HeaderBlock, MainBlock, ForEachBlock, ImageBlock, VideoBlock, Heading1Block, Heading2Block, Heading3Block, Heading4Block, Heading5Block, Heading6Block, ParagraphBlock } from '$lib';
// Import other blocks as needed

const ComponentRegistry = {
  text: TextBlock,
  image: ImageComponent,
  // Map other components as needed
};

export default ComponentRegistry;
