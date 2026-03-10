/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {

	const {title, bullet} = attributes;

	return (
		<>
			<div { ...useBlockProps.save({className: "gobmx-card gobmx-card--rounded"}) }>
				<div className="gobmx-card__title-container">
					<RichText.Content
						tagName="span" 
						className="gobmx-card__bullet"
						value={bullet}
						onChange={(value) => setAttributes({bullet: value})} 
					/>
					<RichText.Content
						tagName="h3" 
						className="gobmx-card__title noto-sans"
						value={title} 
					/>
				</div>
				<div className='gobmx-card__content'>
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
