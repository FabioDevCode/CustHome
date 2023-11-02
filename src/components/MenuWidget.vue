<script setup>
import { modeStore } from '@/stores/mode';
import { configStore } from '@/stores/config';

const mode = modeStore()
const config = configStore()

</script>


<template>
    <div v-if="mode.menu_widget" :class="config.theme" id="overlay-menu">
        <div class="menu-bar">
            <button class="close-btn-menu" @click="mode.toggleMenuWidget()">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
            </button>

            <div class="menu-body">

                <h4>Menu des widgets</h4>

                <hr>

                <h4>COMMING SOON</h4>


            </div>


            <footer>
                <svg width="3187" height="550" viewBox="0 0 3187 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M771.5 388.5V153.5L829 96H1000L1056.5 152.5V206H988.5V177.5L965 154H865L839.5 179.5V362.5L865 388H965L988.5 364.5V336H1056.5V389.5L1000 446H829L771.5 388.5Z" fill="currentColor"/>
                <path d="M1099.14 393.5V197H1165.14V373L1182.14 390H1222.14L1271.14 341V197H1337.14V446H1276.14V403.5L1233.14 446H1151.64L1099.14 393.5Z" fill="currentColor"/>
                <path d="M1384.55 397V366.5H1449.55V380.5L1460.55 392H1541.55L1552.55 380.5V359L1541.05 347H1433.55L1386.55 299.5V245L1434.05 197H1564.05L1612.55 246V276.5H1547.55V262.5L1536.55 251H1462.55L1451.55 262.5V282L1463.05 294H1570.55L1617.55 341.5V398L1570.05 446H1433.05L1384.55 397Z" fill="currentColor"/>
                <path d="M1687.61 395V252.5H1642.61V197H1688.61V116H1753.61V197H1829.61V253H1753.61V373.5L1770.61 390H1829.61V446H1739.11L1687.61 395Z" fill="currentColor"/>
                <path d="M1874.64 96H1942.64V242.5H2090.64V96H2158.64V446H2090.64V300.5H1942.64V446H1874.64V96Z" fill="currentColor"/>
                <path d="M2216.27 394V249L2267.77 197H2410.77L2462.27 249V394L2410.77 446H2267.77L2216.27 394ZM2378.77 391L2396.27 373.5V269.5L2378.77 252H2299.77L2282.27 269.5V373.5L2299.77 391H2378.77Z" fill="currentColor"/>
                <path d="M2517.16 197H2578.16V238L2618.66 197H2681.66L2715.66 231.5L2749.66 197H2836.66L2890.16 251V446H2824.16V270.5L2807.16 253H2765.16L2738.66 279.5V446H2674.66V269.5L2658.66 253H2628.66L2583.16 299V446H2517.16V197Z" fill="currentColor"/>
                <path d="M2942.83 395V249L2994.33 197H3134.83L3186.83 249V343.5H3008.83V375.5L3024.83 392H3106.33L3121.33 376.5V363.5H3186.33V396L3136.83 446H2993.33L2942.83 395ZM3120.83 297.5V268.5L3103.83 251H3025.83L3008.83 268.5V297.5H3120.83Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25 25H275H400V125V213H275V125H150V425H275V338H400V425V525H275H25V25Z" fill="currentColor"/>
                <rect width="550" height="550" rx="10" stroke="currentColor" stroke-width="50" mask="url(#path-2-inside-1_21_2)"/>
                </svg>
            </footer>
        </div>
    </div>
</template>



<style scoped>
    /* DARK THEME */
    .dark {
        background-color: rgba(0, 0, 0, .2);
    }
    .dark .menu-bar {
		background-color: #1b2125;
    }
    .dark .menu-bar footer {
        color: #37474F;
    }
    .dark .menu-bar .close-btn-menu {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        background-color: #CFD8DC;
    }
    .dark .menu-bar .close-btn-menu:hover {
        background-color: #ECEFF1;
    }
    .dark .menu-bar .menu-body {
        background-color: #263238;
    }
    .dark .menu-body h4 {
        color: whitesmoke;
    }
    .dark .menu-body fieldset {
        border: 1px solid #1976D2;
        color: whitesmoke;

    }
    .dark .menu-body fieldset div {
        background-color: #1976D2;
    }
    .dark .menu-body fieldset div label {
        color: black;
    }
    .dark .menu-body .file-container label {
        background-color: #171e28;
		border: 1px dashed #0D47A1;
        color: #0D47A1;
    }
    .dark .menu-body button {
        background-color: #1976D2;
        color: black;
    }
    .dark .menu-body button:hover {
        background-color: #42A5F5;
    }
    .dark .menu-body hr {
        border-top: 1px dotted #444444;
    }


    /* LIGHT THEME */
    .light {
        background-color: rgba(207, 216, 220, .7);
    }
    .light .menu-bar {
        background-color: #B0BEC5;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .light .menu-bar footer {
        color: #78909C;
    }
    .light .menu-bar .close-btn-menu {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        background-color: #212121;
        color: whitesmoke;
    }
    .light .menu-bar .close-btn-menu:hover {
        background-color: #323232;
    }
    .light .menu-bar .menu-body {
        background-color: rgb(191, 205, 212);
    }
    .light .menu-body h4 {
        color: black;
    }
    .light .menu-body fieldset {
        border: 1px solid #0D47A1;
        color: #212121;
    }
    .light .menu-body fieldset div {
        background-color: #0D47A1;
    }
    .light .menu-body fieldset div label {
        color: whitesmoke;
    }
    .light .menu-body .file-container label {
        background-color: #CFD8DC;
		border: 1px dashed #90A4AE;
        color: #90A4AE;
    }
    .light .menu-body button {
        background-color: #0D47A1;
        color: whitesmoke;
    }
    .light .menu-body button:hover {
        background-color: #1565C0;
    }
    .light .menu-body hr {
        border-top: 1px dotted #90A4AE;
    }


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
		padding: 5px;
		height: max-content;
		min-height: 300px;
		width: 100%;
		border-radius: 5px;
		margin: 20px 0;
	}

	.menu-body fieldset {
        display: flex;
        justify-content: flex-start;
        align-items: center;
		padding: 10px 10px 15px 10px;
		margin: 10px;
		border-radius: 5px;
	}

	.menu-body fieldset div {
        overflow: hidden;
		display: flex;
		align-items: center;
		height: max-content;
        width: 100%;
        border-radius: 5px;
        padding-left: 10px;
		margin: 5px;
	}

	.menu-body fieldset legend {
		padding: 0 5px;
		font-weight: 600;
	}

	.menu-body fieldset div input[type=radio] {
		cursor: pointer;
		border: 0px;
		height: 1.8em;
		width: 1.8em;
	}

	.menu-body fieldset div label {
        display: inline-block;
        padding: 10px;
        height: 100%;
        width: 100%;
		cursor: pointer;
        color: black;
        font-weight: 600;
	}

    .menu-body h4 {
        margin: 5px 10px 0px 10px;
        font-weight: 600;
    }

	.file-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 10px;
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

	#export-config {
		cursor: pointer;
		font-size: 1em;
		font-weight: 600;
		height: 40px;
		width: auto;
		margin: 10px;
		border-radius: 5px;
	}

	#export-config:active {
		transform: scale(.99);
	}

    hr {
        border: none;
        width: 80%;
        margin: 10px auto;
    }

</style>