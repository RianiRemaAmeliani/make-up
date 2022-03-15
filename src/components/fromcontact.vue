<template>
    <div class="col-md-6 mt-5 mb-5">
        <h2 class="text-left">Hubungi Jika Perlu</h2>
        <form @submit.prevent="kirim">
            <div class="form-group">
                <label>Nama</label>
                <input v-model="form.nama" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input v-model="form.email" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Subjek</label>
                <input v-model="form.subjek" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Pesan</label>
                <textarea
                v-model="form.pesan"
                class="form-control"
                cols="30"
                rows="5"
                required
                ></textarea>
            </div>
            <button class="btn btn-danger btn-block" :disabled="sending">
            <span v-if="!sending">Kirim</span>
            <span v-else>sedang dikirim...</span>
        </button>
        </form>

    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nama: "",
        email: "",
        subjek: "",
        pesan: "",
      },
      sent: false,
      sending: false
    };
  },
  methods: {
    async kirim() {
      this.sending = true // kondisi saat sedang kirim pesan :D
      let { data, error } = await this.$supabase
        .from("tb_kontak")
        .insert([this.form]);
      if (data) {
        this.sent = true
        this.sending = false
        this.form = ''
      }
      if (error) console.log("pesan tidak terkirim");
    },
  },
};
</script>

<style scoped>
.form-group {
  text-align: left;
}
</style>