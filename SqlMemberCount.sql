SELECT
  reportsTo as ReportsTo,
  COUNT(ID) as Members,
  CEIL(AVG(Age)) as 'Average Age'
FROM t_3gj7vwvaomlc
WHERE reportsTo IS NOT NULL
GROUP BY reportsTo