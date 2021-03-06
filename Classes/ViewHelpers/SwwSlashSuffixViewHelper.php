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

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * View Helper to return the value of a key in an array.
 */
class SwwSlashSuffixViewHelper extends AbstractViewHelper {


	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the value from', TRUE);
		$this->registerArgument('key', 'string', 'The key to extract the value for', TRUE);
	}


	/**
	 * @return array
	 */
	public function render() {
		$result = NULL;

		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}

		
		
		if ( strpos($result, "//") ) {
			$resultPt1 = (string)substr($result, 0, strpos($result, "[["));
			$resultPt2 = (string)substr($result, strpos($result, "]]")+2);
			
			if ( strpos($resultPt1, "/") !== FALSE ) {
				$suffix = (string)substr($result, strpos($result, "/")+1);
			}
			elseif ( strpos($resultPt2, "/") !== FALSE ) {
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
				return $result;
			}
			
			if ( strpos($result, ";") ) {
				
				$suffixLastChar = (string)substr($suffix, -1, 1);
				if ( $suffixLastChar == ";" ) {
					$suffix = (string)substr($suffix, 0, -1);
					$suffixLastChar = (string)substr($suffix, -1, 1);
					if ( $suffixLastChar == ";" ) {
						$suffix = (string)substr($suffix, 0, -1);
					}
				}
				$suffixPt = (string)str_replace(";", "QQTTQTTQQ", $suffix);
				//return $suffixPt;
				
				//Unterschlagworte als Array speichern
				$suffixNew = $suffixPt;
				$numParts = substr_count($suffixNew, "QQTTQTTQQ");
				$suffixArray = array();
				
				for ($i=0; $i<=$numParts; $i++) {
					$flagPos = strpos($suffixNew, "QQTTQTTQQ");
					if ($flagPos != NULL) {
						$suffixArray[$i] = (string)substr($suffixNew, 0, $flagPos);
						$suffixNew = (string)substr($suffixNew, $flagPos+9);
						
						$firstChar = (string)substr($suffixArray[$i], 0, 1);
						if ( $firstChar == "/" ) {
							$suffixArray[$i] = (string)substr($suffixArray[$i], 1);
						}
					}
					else {
						$suffixArray[$i] = $suffixNew;
					}
				}
				return $suffixArray;
				
			} else {
				$firstSlashPos = strpos($result, "/");
				$suffix = (string)substr($result, $firstSlashPos+1);
				return [$suffix];
			}
		}
		
		elseif ( strpos($result, "/") ) {
		
			if ( strpos($result, ";") ) {
			
				$firstSlashPos = strpos($result, "/");
				$suffix = (string)substr($result, $firstSlashPos);
				
				$suffixLastChar = (string)substr($suffix, -1, 1);
				if ( $suffixLastChar == ";" ) {
					$suffix = (string)substr($suffix, 0, -1);
					$suffixLastChar = (string)substr($suffix, -1, 1);
					if ( $suffixLastChar == ";" ) {
						$suffix = (string)substr($suffix, 0, -1);
					}
				}
				$suffixPt = (string)str_replace(";", "QQTTQTTQQ", $suffix);
				//return $suffixPt;
				
				//Unterschlagworte als Array speichern
				$suffixNew = $suffixPt;
				$numParts = substr_count($suffixNew, "QQTTQTTQQ");
				$suffixArray = array();
				
				if ($numParts != 0) {
					for ($i=0; $i<=$numParts; $i++) {
						$flagPos = strpos($suffixNew, "QQTTQTTQQ");
						if ($flagPos != NULL) {
							$suffixArray[$i] = (string)substr($suffixNew, 0, $flagPos);
							$suffixNew = (string)substr($suffixNew, $flagPos+9);
						}
						else {
							$suffixArray[$i] = $suffixNew;
						}
						
						$firstChar = (string)substr($suffixArray[$i], 0, 1);
						if ( $firstChar == "/" ) {
							$suffixArray[$i] = (string)substr($suffixArray[$i], 1);
						}
					}
					return $suffixArray;
				} else {
					$firstSlashPos = strpos($result, "/");
					$suffix = (string)substr($result, $firstSlashPos+1);
					return [$suffix];
				}
				
			} else {
				$firstSlashPos = strpos($result, "/");
				$suffix = (string)substr($result, $firstSlashPos+1);
				return [$suffix];
			}
			
		}
		
		else {
			return [$result];
		}
	}

}

?>
