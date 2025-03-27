<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li>
                <button>Control Bar</button>

                <img src="" alt="">
            </li>
            <li>
                <!-- Search bar -->
                <div class="search-area">
                    <textarea class="search-bar" name="" id="" rows="1"></textarea>
                    <button>Search</button>
                </div>
                <!-- logo -->
            </li>
            <li>
                <button>OK</button>
            </li>
        </ul>
    </nav>

</template>

<script>

</script>
<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

.navbar-list {
    margin-inline: 1rem;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
}

.search-area {
    align-items: center;
    place-content: center;
    margin-block-start: auto;
}

.search-bar {
    border-radius: 5px;
    border: 1px solid #babaca;
    resize: none;
}
</style>