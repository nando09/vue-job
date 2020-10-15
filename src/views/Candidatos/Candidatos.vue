<template>
	<div class="home">
		<Topo></Topo>
		<Lateral></Lateral>
	</div>
</template>

<script>
import Lateral from '@/components/Menus/Lateral.vue';
import Topo from '@/components/Menus/Topo.vue';

export default {
	name: "Candidatos",
	components: {
		Lateral,
		Topo
	}
};
</script>
