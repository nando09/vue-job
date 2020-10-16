<template>
	<div class="conteudo">
		<b-col>
			<b-row>
				<b-col>
					<h3>Volta!</h3>
				</b-col>
			</b-row>
		</b-col>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Candidatos",
	components:{
	},
	created() {
	},
	data () {
		return {
			candidatos: [],
			candidato: 0,
		}
	},
	computed: {
	},
	mounted() {
		this.getCadidatos();
	},
	methods: {
		getCadidatos() {
			axios.get("http://localhost:3000/candidatos", {
				headers: {
					"Content-Type": "application/json",
					// Authorization: "Bearer " + this.user.token
				}
			})
			.then(response => {
				console.log(response.data);
				this.candidatos = response.data;
			})
			.catch(e => {
				console.log(e);
				alert("servidor fora de área");
			});
		},

		buscarCanditato(id_cadidato){
			axios.get("http://localhost:3000/candidatos/" + id_cadidato, {
				// axios.get('http://localhost:8000/api/produto', {
				headers: {
					"Content-Type": "application/json",
					// Authorization: "Bearer " + this.user.token
				}
			})
				.then(response => {
					console.log(response.data);
					this.candidato = response.data;
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