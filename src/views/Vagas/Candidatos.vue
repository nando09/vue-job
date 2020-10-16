<template>
	<div class="home">
		<Topo></Topo>
		<Lateral></Lateral>
		<Index></Index>
	</div>
</template>

<script>
import Lateral from '@/components/Menus/Lateral.vue';
import Topo from '@/components/Menus/Topo.vue';
import Index from '@/components/Vagas/Index.vue';

export default {
	name: "Candidatos",
	components: {
		Lateral,
		Topo,
		Index
	}
};
</script>
