<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div class='service-card-block service-card-block--green-gradient' <?php echo get_block_wrapper_attributes(); ?>>
	<div class='service-card-block__content'>
		<div>
			<h3 class='service-card-block__title'>
				<?php echo esc_html($attributes['title']); ?>
			</h3>
			<p class='service-card-block__text'>
				<?php echo esc_html($attributes['content']); ?>
			</p>
		</div>
		<a href='#' class='service-card-block__link-text'>
			<?php echo esc_html($attributes['linkText']); ?>
		</a>
	</div>
</div>
