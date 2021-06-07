<template>
	<div class="login">
		<b-form @submit="onSubmit" class="lateral-form">
			<b-form-group id="input-group-1" label="Usuario ou email:" label-for="input-1">
				<b-form-input id="input-1" v-model="email" type="text" placeholder="Usuario ou email" required></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-2" label="Senha:" label-for="input-2">
				<b-form-input type="password" id="input-2" v-model="name" placeholder="Senha" required></b-form-input>
			</b-form-group>

			<b-form-checkbox v-model="checked" name="check-button" switch>
				Você é? <b>{{ tipo }}</b>
			</b-form-checkbox>

			<b-button class="button" type="submit" variant="success">Entrar</b-button>
		</b-form>
	</div>
</template>

<script>
	export default {
	name: "Login",
		data() {
			return {
				email: '',
				name: '',
				food: null,
				checked: true,
				tipo: 'Empresa'
			}
		},
		watch: {
			checked: function (val) {
				if (val) {
					this.tipo = 'Empresa';
				}else{
					this.tipo = 'Canditado';
				}
			},
		},
		methods: {
			onSubmit(event) {
				event.preventDefault()
				alert(JSON.stringify(this.form))
			}
		}
	};
</script>
<style type="text/css">
	.lateral-form{
		max-width: 400px;
		margin: 0 auto;
		background: #046877;
		padding: 20px;
		border-radius: 4px;
		box-shadow: 0px 5px 10px #000;
		webkit-box-shadow: 0px 5px 10px #000;
		/*background: #046877;*/
		/*padding: 50px;*/
		/*width: 40vw;*/
		/*margin: 0 auto;*/
		/*height: 100vh;*/
		/*float: left;*/
		/*width: 40%;*/
		/*max-width: 40%;*/
		/*background: red;*/
		/*height: 100vh;*/
	}

	.login{
		color: white;
		width: 100vw;
		height: 100vh;
		padding-top: 10vh;
	}

	.button{
		margin-top: 20px;
	}
</style>