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

            </div>


            <footer>
                <svg width="575" height="500" viewBox="0 0 575 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_8_2)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M375 0H0V500H375V400H125V100H375V0Z" fill="currentColor"/>
                    <rect x="250" y="100" width="125" height="100" fill="currentColor"/>
                    <rect x="250" y="300" width="125" height="100" fill="currentColor"/>
                    <rect x="500" width="75" height="500" fill="currentColor"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_8_2">
                    <rect width="575" height="500" fill="currentColor"/>
                    </clipPath>
                    </defs>
                </svg>
                <p>CustHome</p>
            </footer>
        </div>
    </div>
</template>



<style scoped>
    /* DARK THEME */
    .dark {
        background-color: rgba(0, 0, 0, .7);
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
		padding: 20px;
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