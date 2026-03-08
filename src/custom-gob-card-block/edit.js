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
import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	return (
		<>
		<div { ...useBlockProps({className: 'service-card-block service-card-block--green-gradient'}) }>
			<div className='service-card-block__content'>
				<div>
					<RichText 
						tagName="h3" 
						className='service-card-block__title'
						value={attributes.title} 
						onChange={(value) => setAttributes({title: value})} 
					/>
					<RichText 
						tagName="p" 
						className='service-card-block__text'
						value={attributes.content} 
						onChange={(value) => setAttributes({content: value})} 
					/>
				</div>
				<RichText 
					tagName="a" 
					className='service-card-block__link-text'
					value={attributes.linkText} 
					onChange={(value) => setAttributes({linkText: value})} 
				/>
			</div>
		</div>
		</>
	);
}
