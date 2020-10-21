<template>
	<div class="conteudo">
		<b-col>
			<b-row>

				<b-col v-for="vaga in vagas" :key="vaga.id" class="vagas-card" md="3" sm="6">
					<b-card :header="vaga.titulo">
						<b-card-text class="small text-muted">
							<b-icon icon="info-circle-fill" variant="info" title="Já faz essa quantidade de dias que você publicou essa vaga!" class="icon-info"></b-icon>
							{{ diasRestantes(vaga.data) }}


						<footer class="blockquote-footer">
							Candidatos: <cite title="Source Title"><b-badge variant="primary" pill v-if="vaga.candidatos_quantidade > 0">{{vaga.candidatos_quantidade}}</b-badge></cite>
						</footer>
						</b-card-text>
						<template #footer>
							<small class="text-muted">
								<b-icon icon="x-circle" scale="1.5" variant="danger" class="icon-padrao"></b-icon>
								<b-icon icon="eye-fill" scale="1.5" class="icon-padrao"></b-icon>
							</small>
						</template>
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

		diasRestantes(data) {
			// return data;
			let date1 = new Date(data);
			let date2 = new Date();
			let timeDiff = Math.abs(date2.getTime() - date1.getTime());
			let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

			if (diffDays == 1) {
				return 'Hoje';
			}else if(diffDays == 2){
				return (diffDays - 1) + ' dia'
			}

			return (diffDays - 1) + ' dias'
		}
	}
};
</script>
<style type="text/css">
	.vagas-card{
		margin-bottom: 10px;
	}

	.icon-info{
		margin: 0 5px;
	}

	.icon-padrao{
		margin: 0 0.5rem;
	}
</style>

<!--
var date1 = new Date("7/11/2010");
var date2 = new Date("12/12/2010");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
console.log(diffDays);
-->