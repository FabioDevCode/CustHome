<script setup>
import { toast } from 'vue3-toastify';
import { modeStore } from '@/stores/mode';
import { saveStore } from '@/stores/save';
const mode = modeStore()
const save = saveStore()


function switchTheme() {
    const swithToggle = document.querySelector('#theme');
    swithToggle.classList.toggle('active');
    save.toggleTheme();
}
function switchWidget() {
    const switchWidget = document.querySelector('#widget');
    switchWidget.classList.toggle('active');
    save.toggleWidget();
}


// EXPORT CONFIG
function exportConfig() {
    const dataStr = 'data:application/json;charset=utf-8,' + encodeURIComponent(localStorage.getItem('CustHome'));
    const downloadLink = document.querySelector('#downloadConfig');
    downloadLink.setAttribute('href', dataStr);
    downloadLink.setAttribute('download', 'CustHome.json');
    downloadLink.click();
};

function dropHandler(e) {
    e.preventDefault();
    if(e.dataTransfer.items.length > 1) {
        toast.error("Veuillez importer un seul fichier.", {
            theme: 'dark',
            position: 'bottom-left',
            autoClose: 5000,
        });
    } else if(e.dataTransfer.items.length == 1) {
        [...e.dataTransfer.items].forEach((item, i) => {
            if (item.kind === "file") {
                const file = item.getAsFile();
                const reader = new FileReader();
                reader.readAsText(file);
                reader.onload = function() {
                    if(!save.controlImport(JSON.parse(reader.result))) {
                        return toast.error("Le fichier importé n'est pas une config CustHome.", {
                            theme: 'dark',
                            position: 'bottom-left',
                            autoClose: 5000,
                        });
                    }
                    save.importConfig(JSON.parse(reader.result));
                }
                reader.onerror = function() {
                    console.log(reader.error);
                    toast.error("Une erreur s'est produite, veuillez réessayer plutard.", {
                        theme: 'dark',
                        position: 'bottom-left',
                        autoClose: 5000,
                    });
                }
            }
        })
    }
};

function dragOverHandler(e) {
    e.preventDefault();
};

// IMPORT CONFIG
function importConfig(e) {
    const file = e.target.files[0] || e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        if(!save.controlImport(JSON.parse(reader.result))) {
            return toast.error("Le fichier importé n'est pas une config CustHome.", {
                theme: 'dark',
                position: 'bottom-left',
                autoClose: 5000,
            });
        }
        save.importConfig(JSON.parse(reader.result));
    }
    reader.onerror = function() {
        console.log(reader.error);
        toast.error("Une erreur s'est produite, veuillez réessayer plutard.", {
            theme: 'dark',
            position: 'bottom-left',
            autoClose: 5000,
        });
    }
}
</script>


<template>
    <div v-if="mode.menu" :class="save.theme" id="overlay-menu">
        <span id="overlay-close" @click="mode.closeMenu()"></span>
        <div class="menu-bar">
            <button class="close-btn-menu" @click="mode.closeMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
            </button>

            <section class="menu-body">
                <h3>PARAMETRES PAR DEFAUT</h3>

                <div>
                    <label id="theme" class="custom-checkbox" :class="{active: save.theme == 'dark'}">
                        <span class="label-text">Thème sombre</span>
                        <input type="checkbox" @click="switchTheme()">
                        <span class="check-body">
                            <span class="check-toggle"></span>
                        </span>
                    </label>
                </div>

                <div>
                    <label id="widget" class="custom-checkbox" :class="{active: save.widget}">
                        <span class="label-text">Widgets</span>
                        <input type="checkbox" @click="switchWidget()">
                        <span class="check-body">
                            <span class="check-toggle"></span>
                        </span>
                    </label>
                </div>


                <div class="file-container" @drop="dropHandler" @dragover="dragOverHandler">
                    <label for="dropzone-file">
                        <div>
                            <svg class="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <b>Importer une configuration</b>
                            <p class="first">
                                <span>Click to upload</span> or drag and drop
                            </p>
                            <p class="second">JSON (CustHome.json)</p>
                        </div>
                        <input @change="importConfig" id="dropzone-file" type="file" accept="application/json" hidden />
                    </label>
                </div>


                <button id="export-save" @click="exportConfig()">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M3.5 13h9a.75.75 0 0 1 .102 1.493l-.102.007h-9a.75.75 0 0 1-.102-1.493L3.5 13h9h-9zM7.898 1.007L8 1a.75.75 0 0 1 .743.648l.007.102v7.688l2.255-2.254a.75.75 0 0 1 .977-.072l.084.072a.75.75 0 0 1 .072.977l-.072.084L8.53 11.78a.75.75 0 0 1-.976.073l-.084-.073l-3.536-3.535a.75.75 0 0 1 .977-1.133l.084.072L7.25 9.44V1.75a.75.75 0 0 1 .648-.743L8 1l-.102.007z" fill="currentColor"></path></g></svg>
                    <p>Exporter ma configuration</p>
                </button>
            </section>


            <footer>
                <svg width="3091" height="550" viewBox="0 0 3091 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M680.858 398.358C677.107 394.607 675 389.52 675 384.216V165.784C675 160.48 677.107 155.393 680.858 151.642L726.642 105.858C730.393 102.107 735.48 100 740.784 100H895.216C900.52 100 905.607 102.107 909.358 105.858L954.142 150.642C957.893 154.393 960 159.48 960 164.784V190C960 201.046 951.046 210 940 210H912C900.954 210 892 200.893 892 189.847C892 184.543 889.893 179.393 886.142 175.642L874.358 163.858C870.607 160.107 865.52 158 860.216 158H776.784C771.48 158 766.393 160.107 762.642 163.858L748.858 177.642C745.107 181.393 743 186.48 743 191.784V358.216C743 363.52 745.107 368.607 748.858 372.358L762.642 386.142C766.393 389.893 771.48 392 776.784 392H860.216C865.52 392 870.607 389.893 874.358 386.142L886.142 374.358C889.893 370.607 892 365.457 892 360.153C892 349.107 900.954 340 912 340H940C951.046 340 960 348.954 960 360V385.216C960 390.52 957.893 395.607 954.142 399.358L909.358 444.142C905.607 447.893 900.52 450 895.216 450H740.784C735.48 450 730.393 447.893 726.642 444.142L680.858 398.358Z" fill="currentColor"/>
                <path d="M1008.49 403.358C1004.74 399.607 1002.64 394.52 1002.64 389.216V221C1002.64 209.954 1011.59 201 1022.64 201H1048.64C1059.68 201 1068.64 209.954 1068.64 221V368.716C1068.64 374.02 1070.74 379.107 1074.49 382.858L1079.78 388.142C1083.53 391.893 1088.62 394 1093.92 394H1117.35C1122.66 394 1127.74 391.893 1131.49 388.142L1168.78 350.858C1172.53 347.107 1174.64 342.02 1174.64 336.716V221C1174.64 209.954 1183.59 201 1194.64 201H1220.64C1231.68 201 1240.64 209.954 1240.64 221V430C1240.64 441.046 1231.68 450 1220.64 450H1192.16C1185.24 450 1179.64 444.394 1179.64 437.479C1179.64 426.36 1166.22 420.758 1158.31 428.574L1142.48 444.225C1138.74 447.925 1133.68 450 1128.42 450H1063.42C1058.12 450 1053.03 447.893 1049.28 444.142L1008.49 403.358Z" fill="currentColor"/>
                <path d="M1293.83 406.845C1290.13 403.101 1288.05 398.045 1288.05 392.776V390.5C1288.05 379.454 1297 370.5 1308.05 370.5H1343.06C1348.57 370.5 1353.05 374.973 1353.05 380.491C1353.05 383.064 1354.04 385.538 1355.82 387.397L1358.37 390.069C1362 393.857 1367.01 396 1372.25 396H1436.84C1442.08 396 1447.1 393.857 1450.72 390.069C1454.14 386.495 1456.05 381.739 1456.05 376.793V371.036C1456.05 365.879 1454.04 360.904 1450.47 357.181C1446.7 353.244 1441.46 351 1436.01 351H1345.39C1340.05 351 1334.93 348.864 1331.18 345.067L1295.83 309.345C1292.13 305.6 1290.05 300.545 1290.05 295.278V257.223C1290.05 251.955 1292.13 246.9 1295.83 243.155L1331.68 206.932C1335.43 203.136 1340.55 201 1345.89 201H1459.2C1464.54 201 1469.66 203.135 1473.42 206.931L1510.26 244.155C1513.97 247.9 1516.05 252.955 1516.05 258.224V260.5C1516.05 271.546 1507.09 280.5 1496.05 280.5H1461.04C1455.52 280.5 1451.05 276.027 1451.05 270.509C1451.05 267.936 1450.05 265.462 1448.28 263.603L1445.72 260.931C1442.1 257.143 1437.08 255 1431.84 255H1374.25C1369.01 255 1364 257.143 1360.37 260.931C1356.96 264.505 1355.05 269.261 1355.05 274.207V277.964C1355.05 283.121 1357.06 288.096 1360.62 291.82C1364.4 295.756 1369.63 298 1375.08 298H1465.7C1471.04 298 1476.16 300.136 1479.92 303.933L1515.26 339.655C1518.97 343.4 1521.05 348.455 1521.05 353.722V393.777C1521.05 399.045 1518.97 404.1 1515.26 407.845L1479.42 444.068C1475.66 447.864 1470.54 450 1465.2 450H1344.89C1339.55 450 1334.43 447.865 1330.68 444.069L1293.83 406.845Z" fill="currentColor"/>
                <path d="M1597.04 404.87C1593.25 401.113 1591.11 395.997 1591.11 390.659V276.5C1591.11 265.454 1582.16 256.5 1571.11 256.5H1566.11C1555.07 256.5 1546.11 247.546 1546.11 236.5V221C1546.11 209.954 1555.07 201 1566.11 201H1572.11C1583.16 201 1592.11 192.046 1592.11 181V140C1592.11 128.954 1601.07 120 1612.11 120H1637.11C1648.16 120 1657.11 128.954 1657.11 140V181C1657.11 192.046 1666.07 201 1677.11 201H1713.11C1724.16 201 1733.11 209.954 1733.11 221V237C1733.11 248.046 1724.16 257 1713.11 257H1677.11C1666.07 257 1657.11 265.954 1657.11 277V369.04C1657.11 374.448 1659.3 379.626 1663.18 383.392L1668.29 388.352C1672.03 391.974 1677.02 394 1682.22 394H1713.11C1724.16 394 1733.11 402.954 1733.11 414V430C1733.11 441.046 1724.16 450 1713.11 450H1650.84C1645.57 450 1640.51 447.92 1636.77 444.211L1597.04 404.87Z" fill="currentColor"/>
                <path d="M1778.14 120C1778.14 108.954 1787.1 100 1798.14 100H1826.14C1837.19 100 1846.14 108.954 1846.14 120V226.5C1846.14 237.546 1855.1 246.5 1866.14 246.5H1974.14C1985.19 246.5 1994.14 237.546 1994.14 226.5V120C1994.14 108.954 2003.1 100 2014.14 100H2042.14C2053.19 100 2062.14 108.954 2062.14 120V430C2062.14 441.046 2053.19 450 2042.14 450H2014.14C2003.1 450 1994.14 441.046 1994.14 430V324.5C1994.14 313.454 1985.19 304.5 1974.14 304.5H1866.14C1855.1 304.5 1846.14 313.454 1846.14 324.5V430C1846.14 441.046 1837.19 450 1826.14 450H1798.14C1787.1 450 1778.14 441.046 1778.14 430V120Z" fill="currentColor"/>
                <path d="M2125.56 403.846C2121.85 400.101 2119.77 395.043 2119.77 389.772V261.228C2119.77 255.957 2121.85 250.899 2125.56 247.154L2165.4 206.926C2169.15 203.134 2174.27 201 2179.61 201H2305.92C2311.26 201 2316.38 203.134 2320.14 206.926L2359.98 247.154C2363.68 250.899 2365.77 255.957 2365.77 261.228V389.772C2365.77 395.043 2363.68 400.101 2359.98 403.846L2320.14 444.074C2316.38 447.866 2311.26 450 2305.92 450H2179.61C2174.27 450 2169.15 447.866 2165.4 444.074L2125.56 403.846ZM2273.98 395C2279.29 395 2284.37 392.893 2288.12 389.142L2293.91 383.358C2297.66 379.607 2299.77 374.52 2299.77 369.216V281.784C2299.77 276.48 2297.66 271.393 2293.91 267.642L2288.12 261.858C2284.37 258.107 2279.29 256 2273.98 256H2211.55C2206.25 256 2201.16 258.107 2197.41 261.858L2191.62 267.642C2187.87 271.393 2185.77 276.48 2185.77 281.784V369.216C2185.77 374.52 2187.87 379.607 2191.62 383.358L2197.41 389.142C2201.16 392.893 2206.25 395 2211.55 395H2273.98Z" fill="currentColor"/>
                <path d="M2420.66 221C2420.66 209.954 2429.62 201 2440.66 201H2469.73C2476.32 201 2481.66 206.343 2481.66 212.935C2481.66 223.603 2494.59 228.912 2502.09 221.322L2516.29 206.945C2520.05 203.141 2525.17 201 2530.52 201H2576.79C2582.15 201 2587.28 203.147 2591.04 206.961L2604.92 221.046C2612.75 228.994 2625.58 228.994 2633.41 221.046L2647.29 206.961C2651.05 203.147 2656.18 201 2661.53 201H2731.83C2737.16 201 2742.28 203.133 2746.03 206.924L2787.87 249.154C2791.58 252.899 2793.66 257.958 2793.66 263.23V430C2793.66 441.046 2784.71 450 2773.66 450H2747.66C2736.62 450 2727.66 441.046 2727.66 430V282.615C2727.66 277.411 2725.64 272.412 2722.01 268.679L2716.56 263.064C2712.79 259.188 2707.61 257 2702.21 257H2676.95C2671.64 257 2666.56 259.107 2662.81 262.858L2648.02 277.642C2644.27 281.393 2642.16 286.48 2642.16 291.784V430C2642.16 441.046 2633.21 450 2622.16 450H2598.16C2587.12 450 2578.16 441.046 2578.16 430V281.605C2578.16 276.407 2576.14 271.413 2572.52 267.682L2568.06 263.077C2564.29 259.193 2559.11 257 2553.7 257H2540.51C2535.17 257 2530.05 259.137 2526.29 262.935L2492.44 297.156C2488.74 300.9 2486.66 305.954 2486.66 311.22V430C2486.66 441.046 2477.71 450 2466.66 450H2440.66C2429.62 450 2420.66 441.046 2420.66 430V221Z" fill="currentColor"/>
                <path d="M2852.12 404.846C2848.41 401.101 2846.33 396.044 2846.33 390.773V261.228C2846.33 255.957 2848.41 250.899 2852.12 247.154L2891.96 206.926C2895.71 203.134 2900.83 201 2906.17 201H3030.04C3035.35 201 3040.44 203.107 3044.19 206.858L3084.47 247.142C3088.22 250.893 3090.33 255.98 3090.33 261.284V327.5C3090.33 338.546 3081.37 347.5 3070.33 347.5H2932.33C2921.28 347.5 2912.33 356.454 2912.33 367.5V371.395C2912.33 376.593 2914.35 381.587 2917.97 385.318L2922.44 389.923C2926.2 393.808 2931.38 396 2936.79 396H3001.35C3006.77 396 3011.96 393.802 3015.72 389.908L3022.22 383.191C3023.89 381.465 3024.83 379.157 3024.83 376.755C3024.83 371.644 3028.97 367.5 3034.08 367.5H3069.83C3080.87 367.5 3089.83 376.454 3089.83 387.5V391.775C3089.83 397.044 3087.75 402.101 3084.04 405.845L3046.2 444.071C3042.44 447.865 3037.32 450 3031.98 450H2905.17C2899.83 450 2894.71 447.866 2890.96 444.072L2852.12 404.846ZM3004.33 301.5C3015.37 301.5 3024.33 292.546 3024.33 281.5V280.615C3024.33 275.411 3022.3 270.412 3018.67 266.679L3013.22 261.064C3009.45 257.188 3004.28 255 2998.87 255H2937.78C2932.38 255 2927.2 257.188 2923.44 261.064L2917.98 266.679C2914.36 270.412 2912.33 275.411 2912.33 280.615V281.5C2912.33 292.546 2921.28 301.5 2932.33 301.5H3004.33Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20C0 8.95431 8.95432 0 20 0H530C541.046 0 550 8.95432 550 20V530C550 541.046 541.046 550 530 550H20C8.95431 550 0 541.046 0 530V20ZM400 45C400 33.9543 408.954 25 420 25H505C516.046 25 525 33.9543 525 45V505C525 516.046 516.046 525 505 525H420C408.954 525 400 516.046 400 505V358C400 346.954 391.046 338 380 338H295C283.954 338 275 346.954 275 358V405C275 416.046 266.046 425 255 425H170C158.954 425 150 416.046 150 405V145C150 133.954 158.954 125 170 125H255C266.046 125 275 133.954 275 145V193C275 204.046 283.954 213 295 213H380C391.046 213 400 204.046 400 193V45Z" fill="currentColor"/>
                </svg>
            </footer>
        </div>
        <a id="downloadConfig"></a>
    </div>
</template>



<style scoped>
    @import "@/assets/css/MenuDark.css";
    @import "@/assets/css/MenuLight.css";

    /* OTHERS CSS PROPERTIES */
    #overlay-menu {
        position: absolute;
        height: 100vh;
        width: 100%;
		padding: 10px;
		display: flex;
		justify-content: flex-end;
		top: 0;
    }

    #overlay-close {
        position: absolute;
        background: transparent;
        top: 0;
        left: 0;
        height: 100%;
        width: calc(100% - min(100%, 400px) - 20px);
    }

	.menu-bar {
		height: 100%;
		width: min(100%, 400px);
		border-radius: 10px;
		padding: 15px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.close-btn-menu {
		height: 30px;
		width: 30px;
        border-radius: 5px;
	}

	.menu-bar footer {
		height: max-content;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.menu-bar footer svg {
		height: 20px;
		width: auto;
		margin-right: 10px;
	}

	.menu-bar footer p {
		font-size: 1.2em;
		font-weight: 600;
	}

	.menu-body {
		position: relative;
		display: flex;
		flex-direction: column;
		height: max-content;
		min-height: 300px;
		width: 100%;
		border-radius: 5px;
		margin: 15px 0;
	}

    .menu-body h3 {
        margin-top: 10px;
        padding: 0 0 20px 10px;
        font-weight: 600;
        border-bottom: 1px solid #212a37;
    }

    .custom-checkbox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #212a37;
    }

    .custom-checkbox input[type=checkbox] {
        display: none;
    }

    .custom-checkbox .label-text {
        display: inline-flex;
        font-weight: 400;
        margin-right: 20px;
        font-family: sans-serif;
        font-size: .9em;
    }

    .custom-checkbox .check-body {
        border: solid 1px #171e28;
        border-radius: 100px;
        display: inline-flex;
        justify-content: flex-start;
        cursor: pointer;
        width: 48px;
        background-color: #ECEFF1;
        box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        /* overflow: hidden; */
    }

    .custom-checkbox .check-body .check-toggle {
        border-radius: 50%;
        border: solid 1px #171e28;
        width: 24px;
        height: 24px;
        background-color: white;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.25);
        box-sizing: border-box;
        margin-left: -1px;
        transition: transform 0.4s ease;
    }

    .custom-checkbox.active .check-toggle {
        transform: translateX(25px);
    }

	.file-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 10px;
        margin-top: 40px;
	}

	.file-container label {
		cursor: pointer;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.file-container label div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 1.25em;
		padding-bottom: 1.5em;
		height: 150px;
	}

	.file-container label div svg {
		width: 1.7em;
		height: 1.7em;
	}

    .file-container label div p {
        font-size: .8em;
        margin: .15em;
    }

    .file-container label div p span {
        font-weight: 600;
    }

	#export-save {
		cursor: pointer;
		font-size: 1.1em;
		font-weight: 400;
		height: 50px;
		width: auto;
		margin: 40px 10px 0px 10px;
		border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
	}

    #export-save svg {
        height: 45%;
        margin-right: 15px;
    }

	#export-save:active {
		transform: scale(.99);
	}

    footer {
        margin-top: 40px;
    }

    #downloadConfig {
        display: none;
    }
</style>