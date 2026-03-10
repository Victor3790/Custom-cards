/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	const {title, bullet} = attributes;

	return (
		<>
			<div { ...useBlockProps({className: "gobmx-card gobmx-card--rounded"}) }>
				<div className="gobmx-card__title-container">
					<RichText 
						tagName="span" 
						className="gobmx-card__bullet"
						value={bullet}
						onChange={(value) => setAttributes({bullet: value})} 
					/>
					<RichText 
						tagName="h3" 
						className="gobmx-card__title"
						value={title} 
						onChange={(value) => setAttributes({title: value})} 
					/>
				</div>
				<div className='gobmx-card__content'>
					<InnerBlocks
						allowedBlocks={['core/paragraph', 'core/list']}
						templateInsertUpdatesSelection={true}
					/>
				</div>
			</div>
		</>
	);
}
