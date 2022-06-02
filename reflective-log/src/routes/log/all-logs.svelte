<script context="module">
    export async function load({ fetch }) {

        const url = './data.json'
		const [{ logs }] = await Promise.all([fetch(url).then((r) => r.json())]);
		
        return {
			props: {
				logs
			}
		};
	}
</script>

<script>
    export let logs;
</script>

<div>
	{#each logs.items as log}
        <div>
            <p>{log.fields.title}</p>
            <a href={`/log/${log.fields.slug}`}>Post</a>
        </div>
    {/each}
</div>