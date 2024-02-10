import { DivBlock, FooterBlock, HeaderBlock, MainBlock, ForEachBlock, ImageBlock, VideoBlock, Heading1Block, Heading2Block, Heading3Block, Heading4Block, Heading5Block, Heading6Block, ParagraphBlock } from '$lib';
// Import other blocks as needed

const ComponentRegistry = {
    div: DivBlock,
    footer: FooterBlock,
    header: HeaderBlock,
    main: MainBlock,
    forEach: ForEachBlock,
    image: ImageBlock,
    video: VideoBlock,
    heading1: Heading1Block,
    heading2: Heading2Block,
    heading3: Heading3Block,
    heading4: Heading4Block,
    heading5: Heading5Block,
    heading6: Heading6Block,
    text: ParagraphBlock
};

export default ComponentRegistry;