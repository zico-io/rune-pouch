import { Card, CardContent, CardHeader } from "@mui/material";

interface AttributeCardProps {
  title: string,
  elevation?: number,
  children: React.ReactElement
}

export const AttributeCard = (props: AttributeCardProps) => {
  const { elevation, title, children } = props;
  return (
    <Card elevation={elevation}>
      <CardHeader title={title} />
      <CardContent sx={{ px: 'auto' }}>
        {children}
      </CardContent>
    </Card>
  )
}
