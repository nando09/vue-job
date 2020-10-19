<template>
	<div class="conteudo">
		<b-col>
			<b-row>
				<b-col v-for="vaga in vagas" :key="vaga.id">
					<b-card :header="vaga.titulo">
						<blockquote class="blockquote mb-0">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<footer class="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</footer>
						</blockquote>
					</b-card>
				</b-col>
			</b-row>
		</b-col>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Index",
	components:{
	},
	created() {
	},
	data () {
		return {
			vagas: []
		}
	},
	computed: {
	},
	mounted() {
		this.getVagas();
	},
	methods: {
		getVagas() {
			axios.get("http://localhost:3000/vagas", {
				headers: {
					"Content-Type": "application/json",
					// Authorization: "Bearer " + this.user.token
				}
			})
			.then(response => {
				console.log(response.data);
				this.vagas = response.data;
			})
			.catch(e => {
				console.log(e);
				alert("servidor fora de área");
			});
		},
	}
};
</script>
<style type="text/css">
	.icon{
		margin: 0 10px;
	}

	.candidato{
		margin-top: 3px;
	}

	.icon-view{
		cursor: pointer;
	}

/*	.card-header{
		background: #86aaaf;
	}*/

	.nav-pills .nav-link.active{
		background: #86aaaf;
	}

	.comentario{
		padding: 20px;
	}

	.objetivo{
		border-bottom: 2px solid #86aaaf;
	}
</style>