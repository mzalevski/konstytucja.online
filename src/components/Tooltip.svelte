<script>
  export let text;
  export let pos;
</script>

<style>
  @media (min-width: 640px) {
    .target::before,
    .target::after {
      --scale: 0;
      --arrow-size: 12px;
      --tooltip-color: #a02828;

      position: absolute;
      transition: 150ms transform;
    }

    .target.b::before,
    .target.b::after {
      transform: translateX(-50%) translateY(var(--translate-y, 0))
        scale(var(--scale));

      bottom: -1.5rem;
      left: 50%;
    }

    .target.r::before,
    .target.r::after {
      transform: translateY(-50%) translateX(var(--translate-x, 0))
        scale(var(--scale));

      right: -1.5rem;
      top: 50%;
    }

    .target.l::before,
    .target.l::after {
      transform: translateY(50%) translateX(var(--translate-x, 0))
        scale(var(--scale));

      left: -2rem;
      bottom: 50%;
    }

    .target::before {
      content: attr(data-tooltip);
      color: white;
      padding: 0.5rem;
      border-radius: 0.375rem;
      font-weight: 600;
      text-align: center;
      width: max-content;
      background: var(--tooltip-color);
    }

    .target.b::before {
      --translate-y: calc(100% - var(--arrow-size) - 1px);
      transform-origin: top center;
    }

    .target.r::before {
      --translate-x: calc(100% - var(--arrow-size) - 1px);
      transform-origin: left center;
    }

    .target.l::before {
      --translate-x: calc(-100% + var(--arrow-size) + 1px);
      transform-origin: right center;
    }

    .target:hover::before,
    .target:hover::after {
      --scale: 1;
    }

    .target::after {
      content: "";
      border: var(--arrow-size) solid transparent;
    }

    .target.b::after {
      --translate-y: calc(-1 * var(--arrow-size));
      border-bottom-color: var(--tooltip-color);
      transform-origin: bottom center;
    }

    .target.r::after {
      --translate-x: calc(-1 * var(--arrow-size));
      border-right-color: var(--tooltip-color);
      transform-origin: right center;
    }

    .target.l::after {
      --translate-x: calc(1 * var(--arrow-size));
      border-left-color: var(--tooltip-color);
      transform-origin: left center;
    }
  }
</style>

<div
  class:b={pos === 'b'}
  class:r={pos === 'r'}
  class:l={pos === 'l'}
  class="relative target"
  data-tooltip={text}>
  <slot />
</div>
