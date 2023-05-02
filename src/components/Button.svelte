<script lang="ts">
  export let href: string;
  export let label: string;
</script>

<a href={href} rel="noreferrer" target="_blank" class="flex items-center space-x-2 shadow-box bg-white rounded-lg p-4">
  <slot />
  <p>{label}</p>
</a>