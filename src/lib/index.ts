// place files you want to import through the `$lib` alias in this folder.
import Modal from "$lib/components/modal/modal.svelte";
import CreateProject from "$lib/components/createProject/createProject.svelte";
import ElementBase from "$lib/blocks/ElementBase.svelte";

// Import Layout Blocks
import DivBlock from "./blocks/layout/DivBlock.svelte";
import FooterBlock from "./blocks/layout/FooterBlock.svelte";
import HeaderBlock from "./blocks/layout/HeaderBlock.svelte";
import MainBlock from "./blocks/layout/MainBlock.svelte";

// Import Logic Blocks
import ForEachBlock from "./blocks/logic/ForEachBlock.svelte";

// Import Media Blocks
import ImageBlock from "./blocks/media/ImageBlock.svelte";
import VideoBlock from "./blocks/media/VideoBlock.svelte";

// Import Text Blocks
import Heading1Block from "./blocks/text/Heading1Block.svelte";
import Heading2Block from "./blocks/text/Heading2Block.svelte";
import Heading3Block from "./blocks/text/Heading3Block.svelte";
import Heading4Block from "./blocks/text/Heading4Block.svelte";
import Heading5Block from "./blocks/text/Heading5Block.svelte";
import Heading6Block from "./blocks/text/Heading6Block.svelte";
import ParagraphBlock from "./blocks/text/ParagraphBlock.svelte";

export { Modal, CreateProject, ElementBase, DivBlock, FooterBlock, HeaderBlock, MainBlock, ForEachBlock, ImageBlock, VideoBlock, Heading1Block, Heading2Block, Heading3Block, Heading4Block, Heading5Block, Heading6Block, ParagraphBlock};
