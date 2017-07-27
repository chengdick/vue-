<template>

     <div class="nav-center">
   		<table>
            <tr>
                <td><img src="../../assets/iocn.png"/></td>
                <td><img src="../../assets/iocn.png"/></td>
                <td><img src="../../assets/iocn.png"/></td>
            </tr>
            <tr>
                <td><img src="../../assets/iocn.png"/></td>
                <td><img src="../../assets/iocn.png"/></td>
                <td><img src="../../assets/iocn.png"/></td>
            </tr>
            <tr>
                <td><img src="../../assets/iocn.png"/></td>
                <td><img src="../../assets/iocn.png"/></td>
                <td><img src="../../assets/iocn.png"/></td>
            </tr>
        </table>   
     </div>
</template>

<script>

export default {
  name: 'nav'
}
</script>

<style scoped>
.nav-center{width: 100%; overflow-x: hidden;overflow-y: scroll; -webkit-overflow-scrolling: touch; top: 194px; right: 0; bottom:46px; left: 0;position: absolute;}
table{width: 100%;border-collapse:collapse;}
table>tr>td{padding: 3px;border:1px solid #f0f0f0;height: 80px}

</style>
