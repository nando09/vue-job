<template>
	<div class="lateral">
		<ul>
			<li>
				<router-link class="grey-text text-lighten-3" to="/"><b-icon font-scale="1.4" icon="house-door"></b-icon></router-link>
			</li>
			<li>
				<router-link class="grey-text text-lighten-3" to="/candidatos"><b-icon font-scale="1.4" icon="person-lines-fill"></b-icon></router-link>
			</li>
			<li>
				<router-link class="grey-text text-lighten-3" to="/curriculos"><b-icon font-scale="1.4" icon="journal-plus"></b-icon></router-link>
			</li>
			<li>
				<router-link class="grey-text text-lighten-3" to="/configuracao"><b-icon font-scale="1.4" icon="pencil-square"></b-icon></router-link>
			</li>
		</ul>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Lateral",
	props: {
		msg: String
	}
};
</script>
<style type="text/css">
	.lateral{
		background: #046877;
		position: fixed;
		float: left;
		z-index: -1;
		width: 5%;
		max-width: 5%;
		height: 100vh;
		webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
		box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
	}

	ul{
		margin: 0;
		padding: 0;
	}

	li a{
		display: block;
		padding: 20px;
		color: #8bd1dc;
	}

	li > a:hover > i, li > a:hover{
		background: #eee;
		color: #046877;
	}

</style>
