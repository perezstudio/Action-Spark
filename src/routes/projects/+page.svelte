<script lang="ts">
    import { Modal, CreateProject } from '$lib';

    interface Project {
        name: string;
        domain: string;
        state: string;
    }

    let showModal = false;
    
    export let data: Project;
</script>

<div class="container mx-auto py-4">
    <div class="flex flex-row justify-between pb-4">
        <div>
            <h1 class="text-3xl font-bold text-gray-950">Welcome Back, Kevin</h1>
            <p class="font-medium text-gray-600">Select the project you’d like to see.</p>
        </div>
        <div>
            <button on:click={() => showModal = true} class="bg-cyan-100 text-cyan-950 px-3.5 py-2.5 rounded-lg hover:bg-cyan-200">Create Project</button>
            <Modal bind:showModal>
                <h2 slot="header" class="text-2xl font-bold">
                    Create Project
                </h2>
                <CreateProject />
            </Modal>
        </div>
    </div>
    <main>
        <div>
            {#each [data] as project}
                <div>
                    <h2>{project.name}</h2>
                    <p>{project.domain}</p>
                </div>
            {/each}
        </div>
    </main>
</div>