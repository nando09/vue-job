<template>
	<div class="conteudo">
		<b-col>
			<b-row>
				<b-col v-for="vaga in vagas" :key="vaga.id" class="vagas-card">
					<b-card :header="vaga.titulo">
						<blockquote class="blockquote mb-0">
							<b-button size="sm" class="mb-2">
								<b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
							</b-button>
							<footer class="blockquote-footer">
								Concorrendo
								<b-badge>5</b-badge> 
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
	.vagas-card{
		margin-bottom: 10px;
	}
</style>

<!-- var date1 = new Date("7/11/2010");
var date2 = new Date("12/12/2010");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
console.log(diffDays); -->