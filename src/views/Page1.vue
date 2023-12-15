<template>
  <div class="q-pa-md">
    <q-btn @click="onCreate" class="mb-3" icon="add" />
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
    <template v-slot:body-cell-avatar="props">
       <q-td :props="props">
        <q-img style="height: 48px; max-width: 48px" :src="props.row.avatar" />
        </q-td> 
    </template>
    <template v-slot:body-cell-actions="props">
        <q-td :props="props">
            <q-btn icon="mode_edit" @click="onEdit(props.row.id)" />
            <q-btn icon="delete" @click="onDelete(props.row.id)" />
        </q-td>
    </template>
    </q-table>
  </div>
</template>

<script setup>
import router from '@/router';
import axios from 'axios'
import { ref } from 'vue';

const columns = [
  { name: 'id', align: 'left', label: 'id', field: 'id', sortable: true },
  { name: 'fname', align: 'left', label: 'fname', field: 'fname', sortable: true },
  { name: 'lname', align: 'left', label: 'lname', field: 'lname', sortable: true },
  { name: 'username', align: 'left', label: 'username', field: 'username', sortable: true },
  { name: 'avatar', align: 'left', label: 'avatar', field: 'avatar', sortable: true },
  { name: 'actions', align: 'left', label: 'actions', field: 'actions', sortable: true },
]

const rows = ref([]);

const fetchData = async() => {
   const res = await axios.get("https://www.melivecode.com/api/users");
   rows.value = res.data;
};
fetchData();

const onEdit = (id) => {
    router.push(`/edit/${id}`);
};

const onDelete = async(id) => {
    await axios.delete("https://www.melivecode.com/api/users/delete", { data: { id } })
    rows.value = rows.value.filter(x => x.id !== id);
};

const onCreate = () => {
    router.push("/create");
};

</script>

<style scoped>

</style>