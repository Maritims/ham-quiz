<script lang="ts">
    let frequency: number;
    let wavelength: number;
</script>

<div class="container">
    <div class="row">
        <div class="col">
            <h2>Kalkulator</h2>
            <p>Fyll ut et av feltene for å beregne bølgelengde eller frekvens.</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="wavelength" placeholder="Bølgelengde" bind:value={wavelength} on:change={() => frequency = 300 / wavelength} >
                <label for="frequency">Bølgelengde</label>
            </div>
        </div>
        <div class="col">
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="frequency" placeholder="Frekvens (MHz)" bind:value={frequency} on:change={() => wavelength = 300 * frequency} >
                <label for="frequency">Frekvens (MHz)</label>
            </div>
        </div>
    </div>
</div>