// place files you want to import through the `$lib` alias in this folder.
import Modal from "$lib/components/modal/modal.svelte";
import CreateProject from "$lib/components/createProject/createProject.svelte";
import ElementBase from "$lib/blocks/ElementBase.svelte";

// Import Layout Blocks
import DivBlock from "$lib/blocks/layout/DivBlock.svelte";
import FooterBlock from "$lib/blocks/layout/FooterBlock.svelte";
import HeaderBlock from "$lib/blocks/layout/HeaderBlock.svelte";
import MainBlock from "$lib/blocks/layout/MainBlock.svelte";

// Import Logic Blocks
import ForEachBlock from "$lib/blocks/logic/ForEachBlock.svelte";

// Import Media Blocks
import ImageBlock from "$lib/blocks/media/ImageBlock.svelte";
import VideoBlock from "$lib/blocks/media/VideoBlock.svelte";

// Import Text Blocks
import Heading1Block from "$lib/blocks/text/Heading1Block.svelte";
import Heading2Block from "$lib/blocks/text/Heading2Block.svelte";
import Heading3Block from "$lib/blocks/text/Heading3Block.svelte";
import Heading4Block from "$lib/blocks/text/Heading4Block.svelte";
import Heading5Block from "$lib/blocks/text/Heading5Block.svelte";
import Heading6Block from "$lib/blocks/text/Heading6Block.svelte";
import ParagraphBlock from "$lib/blocks/text/ParagraphBlock.svelte";

// Import Editor Components
import Canvas from "$lib/components/editor/canvas.svelte";
import PropertiesPanel from "$lib/components/editor/propertiesPanel.svelte";
import Toolbar from "$lib/components/editor/toolbar.svelte";

export { Modal, CreateProject, ElementBase, DivBlock, FooterBlock, HeaderBlock, MainBlock, ForEachBlock, ImageBlock, VideoBlock, Heading1Block, Heading2Block, Heading3Block, Heading4Block, Heading5Block, Heading6Block, ParagraphBlock, Canvas, PropertiesPanel, Toolbar};
