<script context="module">
    export async function load({fetch, params}) {
        const url = `./${params.slug}.json`;
        const res = await fetch(url);

        if(res.ok) {
            const { log } = await res.json();

            return {
                props: {
                    log: log.items[0]
                }
            }
        }

        return {
            status: res.status,
            error: new Error(`Nothing found at ${url}`)
        }
    }
</script>

<script>
    import RichContent from '$lib/components/RichContent.svelte';
    export let log;

    
</script>

<div>
    <RichContent richContent={log.fields.content}/>
</div>