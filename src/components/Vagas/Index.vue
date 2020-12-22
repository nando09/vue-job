<template>
	<div class="conteudo">
		<b-col>
			<b-row>
				<b-modal id="modal-1" title="Informações" size="lg" hide-footer>
					<p class="text-muted my-4">Quando apagar uma vaga sera deletado todos informações sobre ela e os candidatos que se cadastraram!</p>
					<p class="text-muted my-4">Tenha muito atenção e veja o nome exato que deseja deleter!</p>
					<p class="text-muted my-4">A vaga fica ativa por 30 dias, quando passar dessa data sera deletada!</p>
					<p class="text-muted my-4">Caso queira que a vaga seja renovada, tem que renovar antes dos 30 dias!</p>
				</b-modal>
				<b-modal id="modal-2" title="Informações" size="lg" hide-footer>
					<p class="text-muted my-4">Quando apagar uma vaga sera deletado todos informações sobre ela e os candidatos que se cadastraram!</p>
					<p class="text-muted my-4">Tenha muito atenção e veja o nome exato que deseja deleter!</p>
					<p class="text-muted my-4">A vaga fica ativa por 30 dias, quando passar dessa data sera deletada!</p>
					<p class="text-muted my-4">Caso queira que a vaga seja renovada, tem que renovar antes dos 30 dias!</p>
				</b-modal>
				<b-modal id="modal-3" title="Cadastro de vaga" size="lg" hide-footer>
					<b-form @submit="onSubmit" @reset="onReset" v-if="show">
						<b-row>
							<b-col cols="8">
								<b-form-group
									id="input-group-1"
									label="Titulo:"
									label-for="input-1"
									description="Aqui será o nome do titulo aprensentado e pesquisado pelo candidato."
								>
									<b-form-input
										id="input-1"
										v-model="form.titulo"
										required
										placeholder="Titulo da vaga"
									></b-form-input>
								</b-form-group>
							</b-col>

							<b-col cols="4">
								<b-form-group id="input-group-2" label="Quantidade:" label-for="input-2" description="Quantidade de numeros dessa vaga.">
									<b-form-input
										id="input-2"
										v-model="form.quantidade"
										type="number"
										required
										placeholder="Quantidade"
									></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>

						<b-form-group id="input-group-3" label="Categoria:" label-for="input-3">
							<b-form-select
								id="input-3"
								v-model="form.categoria"
								:options="categoria"
								required
							></b-form-select>
						</b-form-group>
						<b-form-textarea
							v-model="form.descricao"
							id="textarea-no-resize"
							placeholder="Descrição da vaga. Pode falar dias que trabalhará, sobre o horario, salarios, beneficios, o que o canditato precisa ter, localicada da empresa, etc..."
							rows="3"
							no-resize
						></b-form-textarea>
						
						<div class="button-right">
							<b-button variant="info">Adicionar beneficio!</b-button>
							<b-button type="reset" variant="danger">Limpar tudo!</b-button>
							<b-button type="submit" variant="success">Salvar agora!</b-button>
						</div>
					</b-form>
				</b-modal>
				<b-col class="vagas-card" md="3" sm="12">
					<b-card align="center" class="card-top" header="Cantidatos" header-text-variant="white" header-bg-variant="info">
						<b-card-text>Total de: {{candidatos_quantidade}} candidatos</b-card-text>
					</b-card>
				</b-col>
				<b-col class="vagas-card" md="3" sm="12">
					<b-card align="center" class="card-top" header="Vagas ativas" header-text-variant="white" header-bg-variant="info">
						<b-card-text>Vagas ativas: {{vagas_ativa_quantidade}}</b-card-text>
					</b-card>
				</b-col>
				<b-col class="vagas-card" md="2" sm="12">
					<b-card align="center" class="card-top">
					</b-card>
				</b-col>
				<b-col class="vagas-card" md="2" sm="12">
					<b-card align="center" class="card-top">
					</b-card>
				</b-col>
				<b-col class="vagas-card" md="2" sm="12">
					<b-card align="center" class="card-top">
					</b-card>
				</b-col>
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
								<b-icon icon="x-circle" scale="1.5" variant="danger" class="icon-default" @click="showAlert"></b-icon>
								<router-link :to="`/vagas/candidatos/${vaga.id}`">
									<b-icon icon="eye-fill" scale="1.5" class="icon-default"></b-icon>
								</router-link>
								<b-icon icon="pencil-square" scale="1.5" class="icon-default" v-b-modal.modal-3 @click="changeVacancy(vaga.id)"></b-icon>
							</small>
						</template>
					</b-card>
				</b-col>
			</b-row>
			<b-icon icon="plus-circle-fill" scale="3" class="icon-default create-vaga" v-b-modal.modal-2></b-icon>
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
			vagas: [],
			candidatos_quantidade: '',
			vagas_ativa_quantidade: '',
			informacao_pagina: false,

			form: {
				titulo: '',
				quantidade: '',
				categoria: null,
				descricao: ''
			},
			categoria: [
				{ 	text: 'Selecione uma categoria', value: null },
				{	text: 'Engenheiro', value: 1},
				{	text: 'TI', value: 2},
				{	text: 'Administração', value: 3},
				{	text: 'Lider', value: 4}
			],
			show: true
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
				this.vagas = response.data.cadastradas;
				this.candidatos_quantidade = response.data.candidatos_quantidade;
				this.vagas_ativa_quantidade = response.data.vagas_ativa_quantidade;
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
		},

		showAlert() {
			// this.$swal('Hello Vue world!!!');
			this.$swal.fire({
				title: 'Tem certeza?',
				text: "Será excluido tudo!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#3085d6',
				confirmButtonText: 'Excluir!'
			}).then((result) => {
				if (result.isConfirmed) {
					this.$swal.fire(
						'Excluido!',
						'Foi excluido tudo relacinado a essa vaga.',
						'success'
					)
				}
			})
		},

		changeVacancy(id){
			console.log(id);
			// if (this.informacao_pagina) {
			// 	this.informacao_pagina = false;
			// }else{
			// 	this.informacao_pagina = true;
			// }
		},



		onSubmit(evt) {
			evt.preventDefault()
			alert(JSON.stringify(this.form))
		},

		onReset(evt) {
			evt.preventDefault()
			// Reset our form values
			this.form.email = ''
			this.form.name = ''
			this.form.food = null
			this.form.checked = []
			// Trick to reset/clear native browser form validation state
			this.show = false
			this.$nextTick(() => {
				this.show = true
			})
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

	.icon-default{
		margin: 0 0.5rem;
	}

	.card-top{
		webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
		box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
	}

	.icon-button-info, .create-vaga, .icon-default{
		cursor: pointer;
	}

	.icon-button-info:focus, .create-vaga:focus, .icon-default:focus{
		outline: none;
	}

	.button-info{
		background: transparent;
		border-color: transparent;
	}

	.info-page{
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: black;
	}

	.create-vaga{
		position: fixed;
		right: 2rem;
		bottom: 2rem;
		color: green;
	}

	.button-right{
		margin-top: 10px;
		float: right;
	}

	.button-right button{
		margin-left: 10px;
	}

	#modal-1, #modal-2, #modal-3{
		padding: 30px;
	}
</style>

<!--
var date1 = new Date("7/11/2010");
var date2 = new Date("12/12/2010");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
console.log(diffDays);
-->