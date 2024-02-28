SELECT
	public."PartClass"."id" as "Part Classification Id",
	public."PartClass"."name" as "Part Classification",
	public."PartType"."id" as "Part Type Id",
	public."PartType"."name" as "Part Type",
	public."PropertyGroup"."id" as "Property Group Id",
	public."PropertyGroup"."name" as "Property Group",
	public."PropertyType"."id" as "Property Type Id",
	public."PropertyType"."name" as "Property Type"
FROM public."PartType"
INNER JOIN
	public."PartClassMembership"
	ON
	public."PartType"."id" = public."PartClassMembership"."partTypeId"
INNER JOIN
	public."PartClass"
	ON
	public."PartClassMembership"."partClassId" = public."PartClass"."id"
INNER JOIN 
	public."PropertyTypeMembership"
	ON 
	public."PartType"."id" = public."PropertyTypeMembership"."partTypeId"
INNER JOIN
	public."PropertyType"
	ON
	public."PropertyTypeMembership"."propertyTypeId" = public."PropertyType"."id"
INNER JOIN
	public."PropertyGroupMembership"
	ON
	public."PropertyGroupMembership"."propertyTypeId" = public."PropertyType"."id"
INNER JOIN
	public."PropertyGroup"
	ON
	public."PropertyGroupMembership"."propertyGroupId" = public."PropertyGroup"."id"
WHERE
	public."PropertyGroupMembership"."isPrimary" = true
	AND
	public."PartClassMembership"."isPrimary" = true
ORDER BY
	public."PartClass"."order",
	public."PartType"."order",
	public."PropertyGroup"."order",
	public."PropertyType"."order"