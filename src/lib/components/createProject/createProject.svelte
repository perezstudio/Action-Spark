<script lang="ts">
    
</script>
<div>
    <form class="flex flex-col">
        <div class="flex flex-col gap-3 py-3">
            <div class="flex flex-col">
                <label for="name" class="">Name</label>
                <input type="text" id="name" name="name">
            </div>
            <div class="flex flex-col">
                <label for="domain">Domain</label>
                <input type="text" id="domain" name="domain">
            </div>
        </div>
        <hr>
        <div class="flex flex-row justify-between pt-2">
            <button class="bg-gray-100 text-gray-950 px-3.5 py-2.5 rounded-lg hover:bg-gray-200">Cancel</button>
            <button class="bg-cyan-100 text-cyan-950 px-3.5 py-2.5 rounded-lg hover:bg-cyan-200">Create</button>
        </div>
    </form>
</div>