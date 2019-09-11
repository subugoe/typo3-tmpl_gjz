<?php
/*******************************************************************************
 * Copyright notice
 *
 * Copyright 2015 Marcus Hellmann, Göttingen Academy of Sciences and Humanities
 *                <mhellma1@gwdg.de>
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
 * View Helper to return publication period of journal and the amount of records for each year
 * optimized for visualization with jQuery.flot.
 */

namespace Gjz18\TmplGjz\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3\CMS\Core\Utility\GeneralUtility;

class SystemstellenErschienenErschlossenViewHelper extends AbstractViewHelper
{
    /**
     * Registers own arguments.
     */
    public function initializeArguments()
    {
        parent::initializeArguments();
        $this->registerArgument('beginn', 'int', 'The string to extract the year of publication begin from', true);
        $this->registerArgument('ende', 'int', 'The string to extract the year of publication end from', true);
    }

    /**
     * @return array
     */
    public function render()
    {
        $open = fopen('./fileadmin/user_upload/res/systematikWarmup/erschienen/systemstellenErschienenErschlossenArray_total.txt', 'r');
        fclose($open);
        if ($open) {
            $finalString = file_get_contents('./fileadmin/user_upload/res/systematikWarmup/erschienen/systemstellenErschienenErschlossenArray_total.txt');

            return $finalString;
        } else {
            $result = null;
            $finalString = null;
            $xml = null;
            $sxe = null;
            $path = null;
            $pubBegin = null;
            $pubEnd = null;
            $years = null;
            $zssArrayRaw_Jahr = null;
            $zssArrayRaw_Anzahl = null;
            $zssArray_Jahr = null;
            $zssArray_Anzahl = null;

            /* @years : length of publication period */
            if ($this->arguments['beginn']) {
                $pubBegin = $this->arguments['beginn'];
            }
            if ($this->arguments['ende']) {
                $pubEnd = $this->arguments['ende'];
            }
            $years = ($pubEnd - $pubBegin) + 1;

            $url = 'http://gjz18solr.tc.sub.uni-goettingen.de/solr410-adw/adw/select?q=pd_Datensatztyp%3AArtikel&rows=1&fl=i011_sa&wt=xml&indent=true&facet=true&facet.query=pd_Datensatztyp%3AArtikel&facet.field=i011_sa&facet.limit=150';
            $includeHeader = false;
            $requestHeaders = false;
            $report = null;

            $xml = GeneralUtility::getUrl($url, $includeHeader, $requestHeaders, $report);

            /* Get XML content from solr answer */
            if ($xml) {
                $sxe = new \SimpleXMLElement($xml);

                if ($sxe) {
                    $zssArrayRaw_Jahr = $sxe->xpath("//lst[@name='i011_sa']/int/@name");
                    $zssArrayRaw_Anzahl = $sxe->xpath("//lst[@name='i011_sa']/int");
                    $zssArray_Jahr = $zssArrayRaw_Jahr;
                    $zssArray_Anzahl = $zssArrayRaw_Anzahl;

                    if ('0' == $zssArray_Anzahl[0]) {
                        for ($year = $pubBegin; $year < ($pubBegin + $years); ++$year) {
                            if ($year != $pubBegin) {
                                $finalString .= ', ';
                            }
                            $finalString .= "{data: [ ['".$year."', 11111] ], color: '#BBBBBB'}";
                        }
                    } else {
                        for ($year = $pubBegin; $year < ($pubBegin + $years); ++$year) {
                            if ($year != $pubBegin) {
                                $finalString .= ', ';
                            }
                            $keyJahrAnzahl = array_search($year, $zssArray_Jahr);

                            if (('0' == $zssArray_Anzahl[$keyJahrAnzahl]) or (false === $keyJahrAnzahl)) {
                                $finalString .= "{data: [ ['".$year."', 11111] ], color: '#BBBBBB'}";
                            } else {
                                /* Anzahl der Einträge pro Jahr **/
                                $finalString .= "{data: [ ['".$year."', ".$zssArray_Anzahl[$keyJahrAnzahl]."] ], color: '#4579B3'}";
                            }
                        }
                    }

                    /* einmaliges Labelling: "Erschlossen" **/
                    if (false !== strpos($finalString, "color: '#4579B3'")) {
                        $insertPos = strpos($finalString, "color: '#4579B3'") + 16;
                        $first = (string) substr($finalString, 0, $insertPos);
                        $insert = ", label: 'Erschlossen'";
                        $last = (string) substr($finalString, $insertPos);
                        $finalString = $first.$insert.$last;
                    }

                    /* einmaliges Labelling: "keine Einträge" **/
                    if (false !== strpos($finalString, "color: '#BBBBBB'")) {
                        $insertPos = strpos($finalString, "color: '#BBBBBB'") + 16;
                        $first = (string) substr($finalString, 0, $insertPos);
                        $insert = ", label: 'keine Einträge'";
                        $last = (string) substr($finalString, $insertPos);
                        $finalString = $first.$insert.$last;
                    }

                    return $finalString;
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    }
}
