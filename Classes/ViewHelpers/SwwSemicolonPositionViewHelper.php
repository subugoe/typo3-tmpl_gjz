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


/**
 * View Helper to return the value of a key in an array.
 */
class Tx_Find_ViewHelpers_SwwSemicolonPositionViewHelper extends Tx_Fluid_Core_ViewHelper_AbstractViewHelper {


	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the value from', TRUE);
		$this->registerArgument('key', 'string', 'The key to extract the value for', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {
		$result = NULL;

		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}
		
		
		
		if ( strpos($result, ";") ) {
			
			if ( strpos($result, "//") ) {
				$resultPt1 = (string)substr($result, 0, strpos($result, "[["));
				$resultPt2 = (string)substr($result, strpos($result, "]]")+2);
				
				if ( strpos($resultPt1, "/") !== FALSE ) {
					$prefix = (string)substr($result, 0, strpos($result, "/"));
					$suffix = (string)substr($result, strpos($result, "/")+1);
				}
				elseif ( strpos($resultPt2, "/") !== FALSE ) {
					$prefix = (string)substr($result, 0, strpos($result, $resultPt2));
					$suffix = (string)substr($result, strpos($result, "]]")+2);
					if ( substr($suffix, 0, 1) == " " ) {
						$suffix = (string)substr($suffix, 1);
					}
					if ( substr($suffix, 0, 1) == "/" ) {
						$suffix = (string)substr($suffix, 1);
					}
					if ( substr($suffix, 0, 1) == " " ) {
						$suffix = (string)substr($suffix, 1);
					}
					if ( substr($suffix, 0, 1) == "/" ) {
						$suffix = (string)substr($suffix, 1);
					}
				}
				else {
					return "noSlash";
				}
				
				if ( strpos($prefix, ";")==TRUE && strpos($suffix, ";")==FALSE ) {
					return "scPrefixTrue";
				}
				if ( strpos($prefix, ";")==FALSE && strpos($suffix, ";")==TRUE ) {
					return "scSuffixTrue";
				}
				if ( strpos($prefix, ";")==TRUE && strpos($suffix, ";")==TRUE ) {
					return "scPrefixSuffixTrue";
				}
			}
			
			elseif ( strpos($result, "/") ) {
				$firstSlashPos = strpos($result, "/");
				$prefix = (string)substr($result, 0, $firstSlashPos);
				$suffix = (string)substr($result, $firstSlashPos+1);
				
				if ( strpos($prefix, ";")==TRUE && strpos($suffix, ";")==FALSE ) {
					return "scPrefixTrue";
				}
				if ( strpos($prefix, ";")==FALSE && strpos($suffix, ";")==TRUE ) {
					return "scSuffixTrue";
				}
				if ( strpos($prefix, ";")==TRUE && strpos($suffix, ";")==TRUE ) {
					return "scPrefixSuffixTrue";
				}
			}
			
			else {
				return "noSlash";
			}
			
		}
		
		else {
			return "noSemicolon";
		}
	}

}

?>