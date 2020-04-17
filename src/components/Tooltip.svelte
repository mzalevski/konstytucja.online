<script>
  export let text = "example text";
  export let pos = "bottom";
</script>

<style>
  @media (min-width: 640px) {
    .avatar::before,
    .avatar::after {
      --scale: 0;
      --arrow-size: 12px;
      --tooltip-color: #a02828;

      position: absolute;
      transition: 150ms transform;
    }

    .avatar.bottom::before,
    .avatar.bottom::after {
      transform: translateX(-50%) translateY(var(--translate-y, 0))
        scale(var(--scale));
      bottom: -1.5rem;
      left: 50%;
    }

    .avatar.right::before,
    .avatar.right::after {
      transform: translateY(-50%) translateX(var(--translate-x, 0))
        scale(var(--scale));
      right: -1.5rem;
      top: 50%;
    }

    .avatar::before {
      content: attr(data-tooltip);
      color: white;
      padding: 0.5rem;
      border-radius: 0.375rem;
      font-weight: 600;
      text-align: center;
      width: max-content;
      background: var(--tooltip-color);
    }

    .avatar.bottom::before {
      --translate-y: calc(100% - var(--arrow-size) - 1px);
      transform-origin: top center;
    }

    .avatar.right::before {
      --translate-x: calc(100% - var(--arrow-size) - 1px);
      transform-origin: left center;
    }

    .avatar:hover::before,
    .avatar:hover::after {
      --scale: 1;
    }

    .avatar::after {
      content: "";
      border: var(--arrow-size) solid transparent;
    }

    .avatar.bottom::after {
      --translate-y: calc(-1 * var(--arrow-size));
      border-bottom-color: var(--tooltip-color);
      transform-origin: bottom center;
    }

    .avatar.right::after {
      --translate-x: calc(-1 * var(--arrow-size));
      border-right-color: var(--tooltip-color);
      transform-origin: right center;
    }
  }
</style>

<div
  class:bottom={pos === 'bottom'}
  class:right={pos === 'right'}
  class="relative avatar"
  data-tooltip={text}>
  <slot />
</div>
