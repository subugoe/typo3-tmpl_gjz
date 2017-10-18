<?php
/*******************************************************************************
 * Copyright notice
 *
 * Copyright 2013 Sven-S. Porst, Göttingen State and University Library
 *                <porst@sub.uni-goettingen.de>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 ******************************************************************************/

namespace Gjz18\TmplGjz\ViewHelpers;

/**
 * View Helper to return the value of a key in an array.
 */
class BuchRezAnzAnkLinkCheckViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {


	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the values from', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {
		$result = NULL;
		$erg = NULL;

		if ($this->arguments['array']) {
			$result = $this->arguments['array'];
		}
		
		foreach ($result as $r => $valueR) {
			if ( (preg_match('/angez/', $result[$r])) || (preg_match('/angek/', $result[$r])) || (preg_match('/rez/', $result[$r])) ) {
				$erg = TRUE;
			}
		}
		
		
		return $erg;
	}

}

?>