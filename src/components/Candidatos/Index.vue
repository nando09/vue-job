<template>
	<div class="conteudo">
		<b-col>
			<b-row>
				<b-col>
					<b-list-group-item class="d-flex align-items-center candidato" v-for="candidato in candidatos" :key="candidato.id">
						<b-avatar variant="info" :src="'data:image/jpeg;base64,' + candidato.image" class="mr-3"></b-avatar>
						<span class="mr-auto" :title="candidato.nome">{{candidato.nome.substring(0,10)}}</span>
						<b-icon class="icon" icon="bookmark-fill" title="Favorito" v-if="candidato.favorito == 1"></b-icon>
						<b-icon class="icon" icon="bookmark" v-else></b-icon>
						<b-icon class="icon icon-view" icon="aspect-ratio" title="Ver candidato"  @click="buscarCanditato(candidato.id)"></b-icon>
					</b-list-group-item>
				</b-col>
				<b-col cols="9">
					<b-card no-body v-if="candidato">
						<b-tabs pills card vertical>
							<b-tab title="Início" active><b-card-text>
								<h3>{{candidato.nome}}</h3>
								<p class="comentario">{{candidato.descricao || 'Não tem nenhum comentário!' }}</p>
								<span class="objetivo"><strong>Objetivo:</strong> {{candidato.objetivo}}</span>
							</b-card-text></b-tab>
							<b-tab title="Cursos"><b-card-text>
								<b-list-group>
									<b-list-group-item href="#" disabled class="flex-column align-items-start" v-for="curso in candidato.cursos" :key="curso.id">
										<div class="d-flex w-100 justify-content-between">
											<h5 class="mb-1">{{curso.instituicao}} - {{curso.nome}}</h5>
											<small class="text-muted"><strong>Inicio:</strong>{{curso.inicio}} <strong>Fim:</strong>{{curso.fim}} - {{curso.status}}</small>
										</div>
									</b-list-group-item>
								</b-list-group>
							</b-card-text></b-tab>
							<b-tab title="Escolaridade"><b-card-text>Escolaridade</b-card-text></b-tab>
							<b-tab title="Informações"><b-card-text>Informações</b-card-text></b-tab>
						</b-tabs>
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